import "./Features.css";

const features = [
  {
    image: "selection.svg",
    title: "Selection",
    text: "Huge database of jobs to help you maximize your chances in your dream company.",
  },
  {
    image: "offers.svg",
    title: "Tracking",
    text: "Keep track of companies you've applied to through your personalized dashboard.",
  },
  {
    image: "search.svg",
    title: "Searching",
    text: "Streamlined job searching with live search bar and pagination for lower load times on database.",
  },
]

function Features(){
  return(
    <div className="features">
      <h1>Make the job search easier!</h1>
      <div className="feature-section">
        {features.map((feat, i) => (
          <div className="feature-card">
              {i % 2 === 0 && (
                <div>
                  <p><b>{feat.title}</b></p>
                  <p>{feat.text}</p>
                </div>
              )}
              <img className="feature-image" src={feat.image}/>
              {i % 2 === 1 && (
                <div>
                  <p><b>{feat.title}</b></p>
                  <p>{feat.text}</p>
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;