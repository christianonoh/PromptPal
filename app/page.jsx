import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-col flex-center">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="md:hidden" />
        <span className="orange_gradient text-center">
          {' '}
          AI-Powered Prompts
        </span>
      </h1>
      <p className="desc text-center">
        PromptPal is an open-source community-driven platform for discovering and sharing AI-generated prompts.
      </p>
      <Feed />
    </section>
  )
}

export default Home
