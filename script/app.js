let first = true

$("form").on("submit", async (e) => {
    e.preventDefault()
    const value = $("#name-input")[0].value

    const res = await fetch(`https://mc-heads.net/minecraft/profile/${value}`).then(response => response.json()).catch(() => {
        $("#error").css("opacity", "100")

        setTimeout(() => {
            $("#error").css("opacity", "0")
        }, 2000);
    })

    if (!res || !res.id) {
        $("#error").css("opacity", "100")

        setTimeout(() => {
            $("#error").css("opacity", "0")
        }, 2000);
    }

    const uuid = res.id

    const head = `https://mc-heads.net/avatar/${uuid}`

    const element = `<a class="head-image" href="${head}" target="_blank"><img src="${head}">`

    $("#heads").append(element)

    const interval = setInterval(() => {
        const a = $("#name-input")[0].value

        if (a.length == 0) {
            return clearInterval(interval)
        }

        $("#name-input")[0].value = a.substr(0, a.length - 1)
    }, 10)
})