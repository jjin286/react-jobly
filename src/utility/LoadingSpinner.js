/**Shows loading spinner */
function LoadingSpinner() {
  return (
    <div className="loading">
      <div className="LoadingSpinner spinner spinner-border " role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
export default LoadingSpinner;
