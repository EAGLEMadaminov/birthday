const Birthday = ({ users }) => {
  return (
    <>
      {users.map((user) => {
        const { img, name, age, id } = user
        return (
          <article key={id} className='item'>
            <img src={img} alt='' />
            <div className='info'>
              <h2>{name}</h2>
              <p>{age}</p>
            </div>
          </article>
        )
      })}
    </>
  )
}
export default Birthday
