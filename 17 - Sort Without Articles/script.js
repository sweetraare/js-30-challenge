      const bands = [
        "The Plot in You",
        "The Devil Wears Prada",
        "Pierce the Veil",
        "Norma Jean",
        "The Bled",
        "Say Anything",
        "The Midway State",
        "We Came as Romans",
        "Counterparts",
        "Oh, Sleeper",
        "A Skylit Drive",
        "Anywhere But Here",
        "An Old Dog",
      ];

      const bandsList = document.getElementById("bands");

      const bandsHTML = bands
        .map((band) => {
          return `<li>${band}</li>`;
        })
        .join("");

      bandsList.innerHTML = `${bandsHTML}`;

      function handleSort() {
        
        const bandsCopy = [...bands];

        const regex = /^(the |an |a )/i;

        const bandsSorted = bandsCopy.sort((a, b) => {
          const firstBandName = a.replace(regex, "");
          const secondBandName = b.replace(regex, "");

          if (firstBandName > secondBandName) {
            return 1;
          } else {
            return -1;
          }

          return 0;
        });

        const bandsHTML = bandsSorted
          .map((band) => {
            return `<li>${band}</li>`;
          })
          .join("");

        bandsList.innerHTML = `${bandsHTML}`;
      }

      function handleunSort() {
        bandsList.innerHTML = `${bandsHTML}`;
      }

      const sortButton = document.getElementById("sortButton");
      sortButton.addEventListener("click", handleSort);

      const unsortButton = document.getElementById("unsortButton");
      unsortButton.addEventListener("click", handleunSort);
