let trendingMediaDBuri =
  "https://api.themoviedb.org/3/trending/all/day?api_key=cd49b8fecd75bb50047909eaff5d429f";

let trendingMediaDBResults = await fetch(trendingMediaDBuri);

let parsedTrendingMediaDBResults = await trendingMediaDBResults.json();

parsedTrendingMediaDBResults.results.forEach(each => {
  trendingMediaTemplate += `
    <!-- Slides -->
    <div class="swiper-slide">
    <div style="height: 300px !important; width: 250px">
      <img src=https://image.tmdb.org/t/p/w500/${each.poster_path} alt=${each.original_title} style="height: inherit; width: inherit; object-fit: fit;">
    </div>
    </div>

`;
});
console.log(parsedTrendingMediaDBResults.results);

trendingMediaVariable.innerHTML = trendingMediaTemplate;
