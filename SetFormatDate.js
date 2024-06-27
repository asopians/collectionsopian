    const today = new Date(); //tgl hari ini
    let PlusDate = new Date(today);
    let PlusMonth = new Date(today);
    let PlusYear = new Date(today);
    PlusDate.setDate(today.getDate() + 30) // berdasarkan tgl
    PlusMonth.setMonth(today.getMonth() + 22) // berdasarkan bulan 
    PlusYear.setFullYear(today.getFullYear() + 10 ) //berdasarkan tahun

    //local Format (hari, tgl, bulan dan tahun)
    let allDate = PlusDate.toLocaleDateString('id-ID', { 
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })

    //format di balik
    let ReverseDate = allDate.split("-").reverse().join("-");

    console.log(allDate);

///if you wanna change local date(ex:id-ID) can see here https://www.w3schools.com/jsref/jsref_tolocalestring.asp#:~:text=%2C%20options)-,Parameter%20Values,-Parameter
