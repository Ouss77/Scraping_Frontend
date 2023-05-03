import "./hostingType.css";

const hostingTypes = [
  {
    imgSrc:"https://www.decouvertemonde.com/wp-content/uploads/2021/07/visiter-Fes-au-Maroc-medina.jpg",
    title: "Fes",
  },
  {
    imgSrc:"https://friendlymorocco.com/wp-content/uploads/2017/07/Hassan-Tower-Rabat-950x640.jpg",
    title: "Rabat",
  },
  {
    imgSrc:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/326947925.jpg?k=821ece9e702add3096ccc084d5af5d8e8f55dd73b4e940e8cdcc05d5a4969cad&o=&hp=1",
    title: "Merzouga",
  },
  {
    imgSrc:"https://www.marrakechbestof.com/wp-content/uploads/2022/08/08B55E43-BC48-4A02-9A24-2854D864E0AE.jpeg",
    title: "Marrakesch",
  },  {
    imgSrc:"https://loveincorporated.blob.core.windows.net/contentimages/main/52bc37a9-53f5-46fb-b30e-f2135b788e95-essaouira-morroco.jpg",
    title: "Essaouira",
  },  {
    imgSrc:"https://www.planetware.com/wpimages/2023/01/morocco-agadir-top-attractions-things-to-do-intro-paragraph-overview.jpg",
    title: "Agadir",
  },
];

function HostingType() {
  return (
    <div className="pList">
      {hostingTypes.map((hostingType, index) => (
        <div className="pListItem" key={index}>
          <img src={hostingType.imgSrc} className="pListImg" />
          <div className="pListTitles">
            <h2>{hostingType.title}</h2>
            <h3>{hostingType.subtitle}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HostingType;
