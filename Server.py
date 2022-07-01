from flask import Flask, render_template, request, jsonify
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer


import pandas as pd
import pickle
import requests

mov_name = pd.read_csv('Movies Data/movies_title.csv')
final_df = pickle.load(open('Movies Data/movies.pkl', 'rb'))


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
    ids = []
    for i in movies_list:
        movie_id = final_df.loc[i[0]].id
        ids.append(movie_id)
    return '{}'.format(ids)


if __name__ == '__main__':
    app.run(debug=True)
