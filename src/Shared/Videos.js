export const VIDEOS = [
  {
    id: 0,
    name: "Beautiful Night",
    src: "https://www.youtube.com/embed/YX5QYITLEBI",
    click: function () {
      const ID = document.getElementById("iframeID");
      ID.src = "https://www.youtube.com/embed/YX5QYITLEBI";
    },
    click2: function incP() {
      this.setState({ seen: true });
    },
  },
  {
    id: 1,
    name: "ThunderStrom",
    src: "https://www.youtube.com/embed/0jkfnIBJRBQ",
    click: function () {
      const ID = document.getElementById("iframeID");
      ID.src = "https://www.youtube.com/embed/0jkfnIBJRBQ";
    },
  },
  {
    id: 2,
    name: "Sea Side ",
    src: "https://www.youtube.com/embed/WxfmULzzKoU",
    click: function () {
      const ID = document.getElementById("iframeID");
      ID.src = "https://www.youtube.com/embed/WxfmULzzKoU";
    },
  },
  {
    id: 3,
    name: "Snow Trees ",
    src: "Assets/Videos/vid5.mp4",
    click: function () {
      const ID = document.getElementById("iframeID");
      ID.src = "Assets/Videos/vid5.mp4";
    },
  },
  {
    id: 4,
    name: "Snow In Rain ",
    src: "Assets/Videos/vid6.mp4",
    click: function () {
      const ID = document.getElementById("iframeID");
      ID.src = "Assets/Videos/vid6.mp4";
    },
  },
  {
    id: 5,
    name: "UnderWater View ",
    src: "Assets/Videos/vid7.mp4",
    click: function () {
      const ID = document.getElementById("iframeID");
      ID.src = "Assets/Videos/vid7.mp4";
    },
  },
  {
    id: 6,
    name: "Mountain Snow ",
    src: "Assets/Videos/vid8.mp4",
    click: function () {
      const ID = document.getElementById("iframeID");
      ID.src = "Assets/Videos/vid8.mp4";
    },
  },
  {
    id: 7,
    name: "Water Bubbels ",
    src: "Assets/Videos/vid9.mp4",
    click: function () {
      const ID = document.getElementById("iframeID");
      ID.src = "Assets/Videos/vid9.mp4";
    },
  },
  {
    id: 8,
    name: "Beach Walking ",
    src: "Assets/Videos/vid10.mp4",
    click: function () {
      const ID = document.getElementById("iframeID");
      ID.src = "Assets/Videos/vid10.mp4";
    },
  },
];
