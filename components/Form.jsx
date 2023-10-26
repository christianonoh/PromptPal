import Link from "next/link"


const Form = ({type, prompt, setPrompt, handleSubmit, submitting}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Prompt</span>
      </h1>
      <p className="desc text-left max-w-md">
        Create and share amazing prompts witht the world, and let your imagination run wild with any AI-powered platform.
      </p>

      <form
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
        onSubmit={handleSubmit}>
        <label>
          <span className="font-semibold text-base text-gray-700">Your AI Prompt</span>
          <textarea
            className="form_textarea"
            placeholder="Enter your prompt here"
            value={prompt.prompt}
            onChange={(e) => setPrompt({ ...prompt, prompt: e.target.value })}
            required
          />
        </label>
        <label>
          <span className="font-semibold text-base text-gray-700">
            Tag
            {' '}
            <span className="font-normal">(#resume, #sport, #messi)</span>
          </span>
          <input
            className="form_input"
            placeholder="#tag"
            value={prompt.tag}
            onChange={(e) => setPrompt({ ...prompt, tag: e.target.value })}
            required
          />
        </label>

        <div className="mt-4 flex-end gap-4">
          <Link href="/" className="text-gray-600 outline_btn">
            Cancel
          </Link>
          <button
            className="black_btn"
            type="submit"
            disabled={submitting}>
            {submitting ? `${type}...` : `${type}`}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form;
