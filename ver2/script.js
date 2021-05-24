let totalLikes = [0,0,0]

function newLike(num, str) {
    totalLikes[num] +=1
    console.log(document.querySelector(str))
    document.querySelector(str).innerText = totalLikes[num] + " " + "Like(s)"
    console.log(totalLikes)
}