import VerticalCard from '../cards/verticalCard'

const LatestPoliticians = ({ politicans }) => {
  return (
    <>
      <div className="text-gray-600 text-lg text-center my-6">Latest Politicians</div>
      <div className="flex flex-wrap justify-center px-24">
        {politicans.map((politician, index) => (
          <div key={index} className="w-1/2 mb-2">
            <VerticalCard politician={politician} key={index} />
          </div>
        ))}
      </div>
    </>
  )
}

export default LatestPoliticians;
