let btn = document.getElementById("btn");
btn.addEventListener('click', () => {
    Swal.fire({
        title: "Submit your Github username",
        input: "text",
        inputAttributes: {
            autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Look up",
        showLoaderOnConfirm: true,
        preConfirm: async (login) => {
            try {
                const githubUrl = `
        https://api.github.com/users/${login}
      `;
                const response = await fetch(githubUrl);
                if (!response.ok) {
                    return Swal.showValidationMessage(`
          ${JSON.stringify(await response.json())}
        `);
                }
                return response.json();
            } catch (error) {
                Swal.showValidationMessage(`
        Request failed: ${error}
      `);
            }
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: `${result.value.login}'s avatar`,
                imageUrl: result.value.avatar_url
            });
        }
    });
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});