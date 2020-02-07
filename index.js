const navMenuItems = document.querySelectorAll("#nav-menu a");
const indicator = document.querySelector(".indicator");

function handleMenuItemClick(target) {
  navMenuItems.forEach(item => {
    item.classList.remove("active");
    item.style = "";
  });
  target.classList.add("active");
  indicator.style.width = `${target.offsetWidth}px`;
  indicator.style.left = `${target.offsetLeft}px`;

  const currentSection = document.querySelector(".active-section");
  currentSection.style.zIndex = 0;
  currentSection.classList.remove("active-section");

  const newCurrentSection = document.querySelector(
    `.${target.getAttribute("data-rel")}`
  );
  newCurrentSection.classList.add("active-section");
  newCurrentSection.style.zIndex = 999;
}

navMenuItems.forEach(item => {
  item.addEventListener("click", e => handleMenuItemClick(item));
  item.classList.contains("active") && handleMenuItemClick(item);
});

//点赞弹窗
const thumbsEl = document.querySelector(".thumbs-btn");
thumbsEl.addEventListener("click", () => {
  if (thumbsEl.innerHTML.indexOf("已点赞") === -1) {
    thumbsEl.innerHTML = thumbsEl.innerHTML.replace("点赞", "已点赞");
    swal("点赞成功", "谢谢你的点赞，祝你每天开心(笑脸)", "success");
  } else {
    swal("点赞失败", "你已经点过赞啦！", "error");
  }

});

//微信弹窗
const weChat = document.querySelector(".fa-weixin").parentNode;
weChat.addEventListener("click", () => {
  let img = document.createElement("img");
  img.src = "images/weChat.png";
  img.width = 250;
  img.height = 250;
  swal({
    title: "扫我扫我",
    text: "扫我领取一包辣条",
    content: img
  });
});
//QQ弹窗
const qq = document.querySelector(".fa-qq").parentNode;
qq.addEventListener("click", () => {
  let img = document.createElement("img");
  img.src = "images/qq.jpg";
  img.width = 250;
  img.height = 250;
  swal({
    title: "扫我扫我",
    text: "加qq送两包辣条",
    content: img
  });
});
