// eslint-disable-next-line react/prop-types
const SectionContainer = ({ children, className }) => {

  return (
    <section className={`${className} w-full mx-auto lg:w-[740px] pb-16`}>
      {children}
    </section>
  )
}

export default SectionContainer