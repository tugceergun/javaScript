//session storage yalnızca tarayıcı açıkken (sayfa yeniden yüklendiğindeki veya geri yüklendiğindeki durumlar dahil olmak üzere) bir depolama alanı sağlarken local storage tarayıcı kapatıldıktan sonra da verileri depolamaya devam eder.
//local storage, JavaScript sitelerinin ve uygulamalarının son kullanma tarihi olmadan, bir web tarayıcısında key/value değerlerinin kaydedebilmesine izin veren bir özelliktir.
//session storage, Bir web tarayıcısında key/value değerlerini yalnızca bir oturum süresi için tarayıcıya kaydedebilmesine izin veren bir özelliktir. Yani tarayıcı sekmesi kapatıldığında veriler de kaybolur.
//local storage string olarak veri tutar.
//JSON.parse(), dizeden(string) JSON verilerini ayrıştırmak için kullanılır.
//JSON.stringify(), JavaScript nesnesini(object) dizeye dönüştürmek için kullanılır.

let user={userName: "tugceergun", isActive: true}
console.log(user)
localStorage.setItem('userInfo', JSON.stringify(user))

let userInfo1=localStorage.getItem('userInfo') //bilgiyi al.
userInfo1=JSON.parse(userInfo1) //aldigimiz bilgiyi JSON icine attik.
console.log(userInfo1) // bu JSON.stringify kullanmadan object olarak gelir.