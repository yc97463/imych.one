var videoInfo;

$.ajax("../assets/js/arrayProject.json?sa", {
    "error": () => {
        alert("Error");
    },
    "success": (data) => {
        data.forEach((current) => {
            $("#cd_listsProject").append(`
            <a name="${current.img.alt}" id="${current.img.alt}"></a>
            <div class="column is-half">
            <a href="${current.url}" target="_blank" class="cd-link">
                <div class="card large round">
                    <!-- Card-->
                    <div class="card-image">
                        <figure class="image image is-16by9">
                            <img src="https://img.imych.one/me/images/v2/${current.img.url}" class="cd_img">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4 cd-title">
                                ${current.title}
                                </p>
                            </div>
                        </div>
                        <div class="content">
                            ${current.content}
                        </div>
                    </div>
                </div>
            </a>
            </div>
            `)
        })
    }
})

