document.getElementById;

function showReviews() {
  console.log(this);
}

$(document).ready(function () {
  // Function to fetch API data
  const trendingMedia = async () => {
    let trendingMediaVariable = document.getElementById("my-grid-container");
    let myTextarea = document.getElementById("textarea");

    let trendingMediaTemplate = "";
    let myTextareaTemplate = "";

    let trendingMediaDBuri =
      "https://api.themoviedb.org/3/trending/all/day?api_key=cd49b8fecd75bb50047909eaff5d429f";

    $.ajax({
      url: trendingMediaDBuri,
      method: "GET",
      dataType: "json",
      success: function (response) {
        // Handle successful response
        console.log("API response:", response.results);
        // Process the response further as needed
        response.results.forEach(each => {
          //   myTextareaTemplate += `
          //   <div
          //   id="textarea"
          //   class="col-md-4 themed-grid-col text-bg-warning h-100"
          // >
          //   <div>Original Title: ${each.original_title}</div>
          //   <div>Title: ${each.title}</div>
          //   <div>Release date: ${each.release_date}</div>
          //   <div>Original language: ${each.original_language}</div>
          //   <div>Media Type: ${each.media_type}</div>
          //   <div>IMDb rating: ${each.vote_average} <span>Popularity: ${each.popularity}</span></div>
          //   <div>Overview: ${each.overview}</div>
          //   <div></div>
          // </div>
          //   `;

          trendingMediaTemplate += `
            <div class="col bg-white" style="height: 340px">
              <!-- Each card starts here -->
              <div
                class="card card-cover overflow-hidden text-bg-dark rounded-4 shadow-lg"
                id="requested-imgs"
              >
                <img
                  src=https://image.tmdb.org/t/p/w500/${each.poster_path}
                  alt=${each.original_title}
                  style="height: 100%"
                />
                <div class="overlay">
                  <button
                    onclick="showReviews()"
                    style="
                      display: inline-block;
                      background: none;
                      color: white;
                      border: none;
                      outline: 1px solid white;
                      padding: 4px 8px;
                      border-radius: 4px;
                      cursor: pointer;
                    "
                  >
                    Click for the overview texts
                  </button>
                </div>
              </div>
            </div>
        
        `;
        });

        myTextarea.innerHTML = myTextareaTemplate;
        trendingMediaVariable.innerHTML = trendingMediaTemplate;
      },
      error: function (xhr, status, error) {
        // Handle errors
        console.error("Error fetching data:", status, error);
        // Optionally display an error message to the user
        $("#error-message").text(
          "Error fetching data. Please try again later."
        );
      },
    });
  };

  // Call the fetchData function
  trendingMedia();

  // Function to toggle modal
  function toggleModal() {
    $("#modalTour").toggleClass("d-block");
  }

  // Listen for click events to toggle modal
  $(".toggle-modal").click(() => toggleModal());
  $("#close-modal").click(() => toggleModal());
});
