<a name="readme-top"></a>

<div align="center">
  <img src="/public/assets/images/logo.png" alt="logo" width="80" height="auto" style="border-radius: 50%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"/>
  <h1 style="font-family: 'Arial', sans-serif; color: #333; font-weight: bold; margin-top: 10px;">PromptPal</h1>
</div>


<!-- TABLE OF CONTENTS -->
<details>
<summary> 📗 Table of Contents</summary>

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Link to Live Demo](#liveDemo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
- [👥 Team](#team)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
<!-- - [❓ FAQ (OPTIONAL)](#faq) -->
- [📝 License](#license)
</details>
<!-- PROJECT DESCRIPTION -->

# 📑 PROMPTPAL <a name="about-project"></a>

Welcome to PromptPal, a creative prompts sharing application built with Next.js, React, MongoDB, Tailwind CSS, and NextAuth! PromptPal is designed to inspire creativity and encourage users to engage in various creative activities by providing them with prompts for different things such as art, writing, photography, and more.

This README will guide you through the installation and usage of PromptPal, as well as provide an overview of its features.
## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

- **[Next.js](https://nextjs.org/):** A React framework for building server-rendered React applications.
- **[React](https://react.dev/):** A JavaScript library for building user interfaces.
- **[MongoDB](https://www.mongodb.com/):** A NoSQL database for storing prompt data.
- **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for styling the application.
- **[NextAuth](https://next-auth.js.org/):** Authentication library for Next.js applications.

<!-- Features -->

### Key Features <a name="key-features"></a>

- **Prompt Sharing:** Users can create and share prompts for various creative activities.
- **Prompt Categories:** Prompts can be organized into categories like Art, Writing, Photography, and more.
- **User Authentication:** Secure authentication using NextAuth to ensure user data privacy and personalized experiences.
- **Responsive Design:** A responsive and visually pleasing user interface built with Tailwind CSS.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo<a name="liveDemo"></a>

- Check out PromptPal app [here.](https://prompt-pal-umber.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

Before setting up PromptPal, ensure you have [Node.js and npm](https://nodejs.org/) installed, [Git](https://git-scm.com/) for repository cloning, a running [MongoDB Atlas](https://www.mongodb.com/) instance with a connection string (URI) ready, a code editor, an internet connection, and a supported web browser. Additionally, if using Google as an authentication provider, you'll need a [Google Developer account](https://cloud.google.com/), OAuth client credentials, an OAuth consent screen, and properly defined authorized redirect URIs for Google authentication via NextAuth. Make reference to [this article](https://clerk.com/blog/add-google-login-next13-app?utm_source=www.google.com&utm_medium=referral&utm_campaign=none) to get a better understanding.

### Setup

Clone or download the PromptPal repository to your local machine.
```sh
  git clone git@github.com:christianonoh/prompt-pal.git
```
Open your terminal and navigate to the cloned project directory.

### Install

#### Install dependencies

```sh
npm install
```
#### Set up environment variables:

- Create a .env.local file in the project root and provide the following variables:

```sh
GOOGLE_ID=your_google_id

GOOGLE_CLIENT_SECRET=your_client_secret

MONGODB_URI=your_mongodb_uri

NEXTAUTH_URL=http://localhost:3000

NEXTAUTH_URL_INTERNAL=http://localhost:3000

NEXTAUTH_SECRET=your_nextauth_secret_key
```
- Note: NEXTAUTH_SECRET can be generated using `$ openssl rand -base64 32` in your terminal.

### Usage
Start the server to run the application locally.

```sh
  npm run dev
```
Open your web browser and go to `http://localhost:3000/` and add an endpoint to access your desired data.


<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Christian Onoh**

- GitHub: [@christianonoh](https://github.com/christianonoh)
- Twitter: [@onohchristian](https://twitter.com/onohchristian)
- LinkedIn: [Christian Onoh](https://www.linkedin.com/in/christianonoh)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Comments and Likes:** Users can interact with prompts by leaving comments and liking their favorite prompts.
- [ ] **User Profiles:** Users can create and customize their profiles with avatars and personal information.
- [ ] **Search and Filters:** Easily search for prompts and filter by category or popularity.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>
We're committed to continuously improving PromptPal. If you encounter any issues or have suggestions for improvement, please [submit an issue](https://github.com/christianonoh/vecs-school-backend/issues) or if you'd like to contribute, please follow these guidelines:
- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and ensure the code is well-documented.
- Test your changes thoroughly.
- Submit a pull request with a clear description of your changes.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project please give it a star ⭐️. Thanks for your support!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>
Thanks to all the PromptPal contributors/team.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
