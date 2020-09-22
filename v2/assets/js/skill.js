var videoInfo;

$.ajax("../assets/js/arraySkill.json?sa", {
    "error": () => {
        alert("Error");
    },
    "success": (data) => {
        data.forEach((current) => {
            $("#cd_listsSkill").append(`
            <a name="${current.img.alt}" id="${current.img.alt}"></a>
            <div class="column is-one-third">
                <div class="card large round">
                    <!-- Card-->
                    <div class="card-image">
                        <figure class="image">
                            <img src="https://img.imych.one/photos/images/${current.img.url}" class="cd_img">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4 cd-title">
                                  <span class='tag is-warning is-padding'>${current.tag}</span>
                                  ${current.title}
                                </p>
                                <p class="cd-description">
                                    <span class="title is-6 cd-subtitle"><i class="cd-icon fa fa-clock-o"></i>${current.time}</span>
                                    <span class="title is-6 cd-subtitle"><i class="cd-icon fa fa-map-marker"></i>${current.location}</span>
                                </p>
                            </div>
                        </div>
                        <div class="content">
                            ${current.content}
                        </div>
                    </div>
                </div>
            </div>
            `)
        })
    }
})

