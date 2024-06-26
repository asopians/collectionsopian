    const today = new Date(); //tgl hari ini
    let PlusDate = new Date(today);
    let PlusMonth = new Date(today);
    let PlusYear = new Date(today);
    PlusDate.setDate(today.getDate() + 30) // berdasarkan tgl
    PlusMonth.setMonth(today.getMonth() + 22) // berdasarkan bulan 
    PlusYear.setFullYear(today.getFullYear() + 10 ) //berdasarkan tahun
    
    //localdate
    let thisDate = PlusMonth.toLocaleDateString('id-ID', {
      day: 'numeric'
    });
    
    //local Month Year
    let thismonthyear = PlusMonth.toLocaleDateString('id-ID', {
      month: 'long', year: 'numeric'
    });
    
    //local Format
    let allFormat = PlusMonth.toLocaleDateString('id-ID', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
    console.log(thisDate)
    console.log(thismonthyear);
    console.log(allFormat)

///if you wanna change local date(ex:id-ID) can see here https://www.w3schools.com/jsref/jsref_tolocalestring.asp#:~:text=%2C%20options)-,Parameter%20Values,-Parameter
