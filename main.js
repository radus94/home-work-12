var arr = ["HTML", 11, "JavaScript", 2, "CSS", 23, 12]

document.write("<span>Array: </span>" + arr)

arr.push(-20)

document.write("</br><span>Array after push: </span>" + arr)

arr.unshift(1000)

document.write("</br><span>Array after unshift: </span>" + arr)

arr.push("Last array element")

document.write("</br><span>Array after push 2: </span>" + arr)

arr.splice(3, 1)

document.write("</br><span>Array after filter: </span>" + arr)

for (var i=0; i<arr.length; i++) {
    if (typeof arr[i] === "string") {
        arr.splice(i, 1)
    }
}

document.write("</br><span>Array with number: </span>" + arr)

const map_pow = arr.map(x => x*x)

document.write("</br><span>Array pow: </span>" + map_pow)

const max_elem = Math.max(...map_pow)

document.write("</br><span>Array max element: </span>" + max_elem)