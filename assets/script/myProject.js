let datas = [];
let dataFull = [];
let trans = [];
function getData2(event) {
  event.preventDefault();
  let projectName = document.getElementById("projectName").value;
  let startDate = document.getElementById("startDate").value;
  let endDate = document.getElementById("endDate").value;
  let Description = document.getElementById("Description").value;
  let image = document.getElementById("image").files;

  image = URL.createObjectURL(image[0]);

  let checkboxs = document.querySelectorAll('input[type="checkbox"]:checked');
  checkboxs.forEach((checkboxs) => {
    datas.push(checkboxs.value);
  });
  let tech = {
    projectName,
    startDate,
    endDate,
    Description,
    tech: datas,
    image,
  };

  dataFull.push(tech);
  console.log(dataFull);
  showData();
}
const showData = () => {
  document.getElementById("contents").innerHTML = ``;
  for (let i = 0; i < dataFull.length; i++) {
    let validasi = dataFull[i].tech;
    console.log(dataFull[i]);
    document.getElementById("contents").innerHTML += `
       <div class="card">
  <div class="upper">
      <img src="${dataFull[i].image}" alt="">
  </div>
  <div>
      <div class="title-card"> ${dataFull[i].projectName} - ${
      dataFull[i].endDate
    }</div>
      <div class="bulan"> durasi: 3 bulan </div>
  </div>
      <div>
          <p>${dataFull[i].Description}</p>
      </div>
  <div>
      <div class="logo">
          ${validasi.map(function (e) {
            return '<i class="' + e + '"></i>';
          })}
      </div>
      <div class="action">
          <button>edit</button>
          <button>delete</button>
      </div>
  </div>
</div> `;
  }
};
