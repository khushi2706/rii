var d = new Date();
document.getElementById("demo").innerHTML = d.getFullYear();
function view(str)
 {    
    url = 'view.html?name=' + encodeURIComponent(str);
    document.location.href = url;
 }
 var information = {
    starhealth : "&emsp; Star Health  Allied Insurance Co. Ltd. is India's first standalone health insurance company. The company started its operations in 2006 and is in joint collaboration with Allied Insurance. It specializes in providing health insurance at low-cost rates to its customers.Star Health Allied Insurance Co. Ltd. is India's first standalone health insurance company. The company started its operations in 2006 and is in joint collaboration with Allied Insurance. It specializes in providing health insurance at low-cost rates to its customers.",
    lic : "&emsp; Life Insurance Corporation of India (LIC) is the largest insurance company in India and boasts of a very large customer base. With a claim settlement ratio of 98.04% for the year 2017-18, LIC offers a diverse range of insurance portfolio catering to various needs of its customers. The Life Insurance Corporation of India (LIC) is a state-owned insurance group and investment company. It is the largest insurance company in India with an estimated asset value of Rs 1,88,3018.82 crore.",
    united : "&emsp; United India Insurance caters into every aspect of general insurance segment. It delivers helpful policies related to health insurance, vehicle insurance, travel insurance, rural insurance and business insurance among others. The company is into the same business from many years and has divided all products into different sections. The company is offering a wide range of effective and helpful products which will go well with different types of requirements.<br>&emsp; With the help of qualified and experienced team members, the company has been delivering an effective and wide range of products. The company believes in complete customer satisfaction hence it tries to offer effective products that can easily meet the needs of consumers. Here is the list of all the products that United India Insurance offers to you. You must go through them and choose the best one which can easily go well with your needs.",
    sip : "&emsp; Systematic Investment Plan (SIP) is an investment route offered by Mutual Funds wherein one can invest a fixed amount in a Mutual Fund scheme at regular intervals– say once a month or once a quarter, instead of making a lump-sum investment. The installment amount could be as little as INR 500 a month and is similar to a recurring deposit. It’s convenient as you can give your bank standing instructions to debit the amount every month.SIPs help you to average your purchase cost and maximise returns. When you invest regularly over a period irrespective of the market conditions, you would get more units when the market is low and less units when the market is high. This averages out the purchase cost of your mutual fund units.",
    mutual_fund:"&emsp; When you buy a mutual fund, your money is combined with the money from other investors, and allows you to buy part of a pool of investments. A mutual fund holds a variety of investments which can make it easier for investors to diversify than through ownership of individual stocks or bonds.Not all investments perform well at the same time. Holding a variety of investments may help offset the impact of poor performers, while taking advantage of the earning potential of the rest. This is known as diversification. Mutual funds allow you to pool your money with other investors and leave the specific investment decisions to a portfolio manager. Portfolio managers decide where to invest the money in the fund, and when to buy and sell investments.",
    termplan : "&emsp; When you purchase a term insurance plan early, you can secure your family’s financial future at an affordable cost. With an increase in age, your premium amount will also increase. Hence, the earning members of any family should buy term insurance as early as possible. It will provide your family, the financial protection they deserve in case of any unfortunate event. An earning individual up to the age of 40 should purchase a term plan with a life cover of approximately 20 times the annual income, a person in his 40s should buy a cover 10-20 times, and an individual in his 50s should opt for a life cover of 5-10 times the annual income."         

};
function load() {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    console.log(data.name);
    l = data.name;
    locn = data.name + ".jpg";
    var i = document.getElementById("img");
    i.setAttribute("src",locn);
    i.setAttribute("height",400);
    i.setAttribute("height",400);

    var canme = document.getElementById('cname');
    canme.innerHTML = data.name;
    var info = document.getElementById('info');
    info.innerHTML = information[l];
}

