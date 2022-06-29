from flask import Flask, render_template, request, jsonify
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer


import pandas as pd
import pickle
import requests

mov_name = pd.read_csv('Movies Data/movies_title.csv')
final_df = pickle.load(open('Movies Data/movies.pkl', 'rb'))
# final_df.head()
# similarity = pickle.load(open('Movies Data/cosine_sim.pkl', 'rb'))


def fetch_poster(movie_id):
    response = requests.get(
        'https://api.themoviedb.org/3/movie/{}?api_key=34b55fa7f2d2346aa1045ed4cc22bd12&language=en-US'.format(movie_id))
    data = response.json()
    return "https://image.tmdb.org/t/p/w500/" + data['poster_path']


def create_similarity():
    count_vector = CountVectorizer(max_features=5000, stop_words='english')
    vector = count_vector.fit_transform(final_df['tags'])
    vector = vector.toarray()
    cosine_similir = cosine_similarity(vector)
    return cosine_similir


app = Flask(__name__)


@app.route("/")
def home():
    movies_list = mov_name['title'].values
    return render_template('home.html', locations=movies_list)


@app.route('/recommend', methods=['POST'])
def recommend():
    movie = request.form.get('movie')
    index = final_df[final_df['title'] == movie].index[0]
    distances = create_similarity()[index]
    movies_list = sorted(enumerate(distances),
                         reverse=True, key=lambda x: x[1])[0:11]

    recomm_movies = []
    recomm_poster = []
    for i in movies_list:
        movie_id = final_df.loc[i[0]].id
       # fetch Poster
        # api = 34b55fa7f2d2346aa1045ed4cc22bd12
        # api2 = https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
        recomm_movies.append(final_df.loc[i[0]].title)
        recomm_poster.append(fetch_poster(movie_id))

    # return jsonify [{recomm_movies}:{recomm_poster}]
    return '{} {}'.format(recomm_movies, recomm_poster)
    # return jsonify(recomm_movies)
    # return '{}'.format(recomm_movies)
    # return jsonify({'Poster': recomm_movies})


if __name__ == '__main__':
    app.run(debug=True)
