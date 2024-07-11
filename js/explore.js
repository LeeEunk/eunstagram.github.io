window.addEventListener("DOMContentLoaded", () => {
    const exploreImg = [
      ["https://picsum.photos/id/1/400/300", 1500, 400],
      ["https://picsum.photos/id/10/400/300", 400, 200],
      ["https://picsum.photos/id/20/400/300", 700, 20],
      ["https://picsum.photos/id/30/400/300", 150, 80],
      ["https://picsum.photos/id/40/400/300", 10, 5],
      ["https://picsum.photos/id/50/400/300", 100, 57],
      ["https://picsum.photos/id/60/400/300", 100, 57],
      ["https://picsum.photos/id/70/400/300", 100, 57],
      ["https://picsum.photos/id/80/400/300", 100, 57],
      ["https://picsum.photos/id/90/400/300", 100, 57],
      ["https://picsum.photos/id/100/400/300", 100, 57],
      ["https://picsum.photos/id/110/400/300", 100, 57],
      ["https://picsum.photos/id/120/400/300", 100, 57],
      ["https://picsum.photos/id/130/400/300", 100, 57],
      ["https://picsum.photos/id/140/400/300", 100, 57],
    ];
  
    const exploreContainerItems = document.querySelector(
      ".exploreContainer__items"
    );
  
    exploreImg.forEach((item) => {
      const exploreItem = document.createElement("div");
      const exploreImg = document.createElement("img");
      exploreItem.classList.add("exploreContainer__item");
      exploreImg.src = item[0];
      exploreItem.appendChild(exploreImg);
      exploreContainerItems.appendChild(exploreItem);
    });
  });
  
