const links = [
    {
     text1:'Digital Boating', href1:'https://www.raymarine.com/en-gb/our-products/digital-boating', src1:'https://d73v3rdaoqh96.cloudfront.net/image/308061165312/image_87dm0ngq0d2m985ncdpacq3k2k/-FWEBP-S650',
     text2:'Thermal Cameras', href2:'https://www.raymarine.com/en-gb/our-products/thermal-cameras', src2:'https://d73v3rdaoqh96.cloudfront.net/image/308061165312/image_s7e1i5lbmp4b7d3o2lnlu8p03o/-FWEBP-S650',
     text3:'AIS', href3:'https://www.raymarine.com/en-gb/our-products/ais', src3:'https://d73v3rdaoqh96.cloudfront.net/image/308061165312/image_unrmvv1b9135d690d5i0k7n37t/-FWEBP-S650',
     text4:'Mobile Apps', href4:'https://www.raymarine.com/en-gb/our-products/mobile', src4:'https://d73v3rdaoqh96.cloudfront.net/image/308061165312/image_9vna3605q558f1p923pdnf1s7i/-FWEBP-S650',
     text5:'VHF Radios', href5:'https://www.raymarine.com/en-gb/our-products/marine-vhf-radio-communications', src5:'https://d73v3rdaoqh96.cloudfront.net/image/308061165312/image_2cvrcmachh30bcs5hjcgsmld7u/-FWEBP-S650',
     text6:'SAT TV', href6:'https://www.raymarine.com/en-gb/our-products/marine-satellite-tv', src6:'https://d73v3rdaoqh96.cloudfront.net/image/308061165312/image_m3fm8c67it3bd4fjidaold3o6i/-FWEBP-S650',
     text7:'Networking', href7:'https://www.raymarine.com/en-gb/our-products/networking-and-accessories', src7:'https://d73v3rdaoqh96.cloudfront.net/image/308061165312/image_ic4e4jt5553s7dj6pt6mr91p6e/-FWEBP-S650',
     text8:'Retired Products', href8:'https://www.raymarine.com/en-gb/our-products/retired-products', src8:'https://d73v3rdaoqh96.cloudfront.net/image/308061165312/image_gverj5uoit5c7aj80f0ecqbd5k/-FWEBP-S650'
    }
];

let linkIndex = 0;

document.getElementById('dButton2').addEventListener('click', function(){
linkIndex = (linkIndex + 1) % links.length;
document.getElementById('dText1').textContent = links[linkIndex].text1;
document.getElementById('dLink1').href = links[linkIndex].href1;
document.getElementById('dImage1').src = links[linkIndex].src1;
document.getElementById('dText2').textContent = links[linkIndex].text2;
document.getElementById('dLink2').href = links[linkIndex].href2;
document.getElementById('dImage2').src = links[linkIndex].src2;
document.getElementById('dText3').textContent = links[linkIndex].text3;
document.getElementById('dLink3').href = links[linkIndex].href3;
document.getElementById('dImage3').src = links[linkIndex].src3;
document.getElementById('dText4').textContent = links[linkIndex].text4;
document.getElementById('dLink4').href = links[linkIndex].href4;
document.getElementById('dImage4').src = links[linkIndex].src4;
document.getElementById('dText5').textContent = links[linkIndex].text5;
document.getElementById('dLink5').href = links[linkIndex].href5;
document.getElementById('dImage5').src = links[linkIndex].src5;
document.getElementById('dText6').textContent = links[linkIndex].text6;
document.getElementById('dLink6').href = links[linkIndex].href6;
document.getElementById('dImage6').src = links[linkIndex].src6;
document.getElementById('dText7').textContent = links[linkIndex].text7;
document.getElementById('dLink7').href = links[linkIndex].href7;
document.getElementById('dImage7').src = links[linkIndex].src7;
document.getElementById('dText8').textContent = links[linkIndex].text8;
document.getElementById('dLink8').href = links[linkIndex].href8;
document.getElementById('dImage8').src = links[linkIndex].src8;
});

function resetPage(){
    location.reload();
}

