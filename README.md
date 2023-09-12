<h1 align="center">
  ChatGPT Clone with Next.js 13, Typescript, Tailwind CSS, Firebase, and OpenAI API.
  <br>
</h1>

<p align="center">
  <a href="#introduction">Introduction</a> •
  <a href="#features">Features</a> •
  <a href="#prerequisites">Prerequisites</a> •
  <a href="#installation">Installation</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

<p align="center">
  <img src="https://github.com/garretthanberg/Netflix-Clone/assets/115447682/72dffe34-beab-4670-a313-bb0d22368c2b" alt="screenshot">
</p>

## Introduction

This project is a ChatGPT clone built using a blend of cutting-edge web development technologies. It aims to recreate the fundamental features of a chatbot application, encompassing real-time chat interaction, user authentication via Firebase, integration with the OpenAI API for natural language processing, responsive design using Tailwind CSS, and dynamic data management with Next.js 13 and TypeScript.

This project was crafted with a focus on learning and skill development, serving as an educational exercise. It's important to clarify that it's not intended for commercial use, but rather designed to showcase the integration of various technologies within a real-world context.

## Features

* User authentication using Google Authentication.
* Seamless integration with the OpenAI API for natural language processing.
* Real-time chat interface with a responsive design powered by Tailwind CSS.
* Simultaneous chat data storage and retrieval using Firestore/Firebase.
* Enhanced user feedback and notifications with React Hot Toast.
* Dynamic data fetching and caching with SWR for improved performance.

<a id="prerequisites"></a>
## Prerequisites

Before you proceed, make sure you have the following tools and technologies installed on your system:

    Node.js (https://nodejs.org)
    Yarn package manager (https://yarnpkg.com)
    Firebase account for authentication and database setup (https://firebase.google.com)
    OpenAi API Key to interact with the OpenAI GPT-3 models (https://www.themoviedb.org/)

## Installation

To run the ChatGPT clone on your local machine, follow these steps:

```bash
# Clone this repository:
$ git clone https://github.com/garretthanberg/ChatGPT-Clone.git


# Go into the repository:
$ cd ChatGPT-Clone 


# Install dependencies using Yarn:
$ yarn install


# Create a Firebase project and set up the necessary configurations (Authentication and Firestore).
# Replace the Firebase config in firebase.js with your credentials.
# Input your credentials into serviceAccountKey.json.
# Create a .env.local file and input your GOOGLE_ID, GOOGLE_SECRET, NEXTAUTH_URL, NEXTAUTH_SECRET, OPENAI_API_KEY, and FIREBASE_SERVICE_ACCOUNT_KEY.


# Run the development server:
$ yarn run dev
```

<p align="center">
  <img src="https://github.com/garretthanberg/Netflix-Clone/assets/115447682/470ded6b-ff60-4958-8e6b-ef2bdf808038" alt="screenshot">
</p>

## Contributing

Contributions to the project are welcome and encouraged! If you find any bugs or want to add new features, please create an issue or submit a pull request. Please make sure to follow the project's code of conduct.

1. Fork the repository
2. Create your branch: git checkout -b feature/YourFeature
3. Commit your changes: git commit -m 'Add YourFeature'
4. Push to the branch: git push origin feature/YourFeature
5. Open a pull request

## License

This project is licensed under the MIT License.

---

I hope you enjoy using my ChatGPT Clone! If you have any questions or need assistance, feel free to contact me.

> Portfolio [garretthanberg.com](https://www.garretthanberg.com) &nbsp;&middot;&nbsp;
> GitHub [@garretthanberg](https://github.com/garretthanberg) &nbsp;&middot;&nbsp;
> LinkedIn [Garrett Hanberg](https://www.linkedin.com/in/garrett-hanberg/) 
