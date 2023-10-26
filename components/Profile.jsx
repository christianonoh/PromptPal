import PromptCard from "./PromptCard"


const Profile = ({ name, description, data, handleDelete, handleEdit }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">
        {description}
      </p>
      <div className="mt-10 prompt_layout">
      {data.map((prompt) => (
      <PromptCard
        key={prompt._id}
        prompt={prompt}
        handleDelete={handleDelete ? () => handleDelete(prompt._id) : null}
        handleEdit={handleEdit ? () => handleEdit(prompt._id) : null}
      />
))}

    </div>
    </section>
  )
}

export default Profile
