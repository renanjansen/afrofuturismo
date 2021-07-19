import "../css/bootstrap.css";
import "../css/MainSoriee.css";

function MainSoriee(params) {
  return (
    <div className="bg-image w-100 text-white" id="soriee">
      <div className="position-absolute top-50 pb-5  start-50 translate-middle">
        <iframe
        
          id="youtube"
          width="300"
          height="170"
          src="https://www.youtube.com/embed/videoseries?list=PLDO4jOZmcRzGC2pOC_YtiHL5OCiWbs_Mo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default MainSoriee;
