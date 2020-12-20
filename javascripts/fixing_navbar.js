
window.addEventListener("scroll",()=>{
    var nav_section=document.querySelector('.nav_section');
    var navbar=document.querySelector('.navbar');
    var burger=document.querySelector('.burger');
    var navlinks=document.querySelector('.nav-links');
    var logotext=document.querySelector('.logo-text');
    nav_section.classList.toggle('fixed_nav_section',window.scrollY>0);
    navbar.classList.toggle('fixed_navbar',window.scrollY>0);
    burger.classList.toggle('fixed_burger',window.scrollY>0);
    navlinks.classList.toggle('fixed_nav-links',window.scrollY>0);
    logotext.classList.toggle('fixed_logo-text',window.scrollY>0);
});

const subject_hover = () =>{
    var cpp_stl=document.querySelector('.cpp_stl_subject_name_subject_percentage_line');
    var c=document.querySelector('.c_subject_name_subject_percentage_line');
    var java_oops=document.querySelector('.java_oops_subject_name_subject_percentage_line');
    var python=document.querySelector('.python_subject_name_subject_percentage_line');
    var ds_algo=document.querySelector('.ds_algo_subject_name_subject_percentage_line');
    var html_css_js=document.querySelector('.html_css_js_subject_name_subject_percentage_line');
    var cpp_stl_inside=document.querySelector('.cpp_stl_subject_name_subject_percentage_line_inside');
    var c_inside=document.querySelector('.c_subject_name_subject_percentage_line_inside');
    var java_oops_inside=document.querySelector('.java_oops_subject_name_subject_percentage_line_inside');
    var python_inside=document.querySelector('.python_subject_name_subject_percentage_line_inside');
    var ds_algo_inside=document.querySelector('.ds_algo_subject_name_subject_percentage_line_inside');
    var html_css_js_inside=document.querySelector('.html_css_js_subject_name_subject_percentage_line_inside');

    html_css_js.addEventListener('mouseover',()=>{
        html_css_js_inside.classList.add('subject_hover');
    });
    html_css_js.addEventListener("mouseout", function() {
        html_css_js_inside.classList.remove('subject_hover');
    });

    cpp_stl.addEventListener('mouseover',()=>{
        cpp_stl_inside.classList.add('subject_hover');
        cpp_stl_inside.style.backgroundColor="pink";
    });
    cpp_stl.addEventListener("mouseout", function() {
        cpp_stl_inside.classList.remove('subject_hover');
        cpp_stl_inside.style.backgroundColor="green";       
    });

    c.addEventListener('mouseover',()=>{
        c_inside.classList.add('subject_hover');
    });
    c.addEventListener("mouseout", function() {
        c_inside.classList.remove('subject_hover');       
    });

    java_oops.addEventListener('mouseover',()=>{
        java_oops_inside.classList.add('subject_hover');
    });
    java_oops.addEventListener("mouseout", function() {
        java_oops_inside.classList.remove('subject_hover');       
    });

    python.addEventListener('mouseover',()=>{
        python_inside.classList.add('subject_hover');
    });
    python.addEventListener("mouseout", function() {
        python_inside.classList.remove('subject_hover');       
    });

    ds_algo.addEventListener('mouseover',()=>{
        ds_algo_inside.classList.add('subject_hover');
    });
    ds_algo.addEventListener("mouseout", function() {
        ds_algo_inside.classList.remove('subject_hover');       
    });

    
}

const change_background=()=>{
    var links = ["https://github.com/Steve-siddu/Portfolio/blob/main/Images/road.jpeg"];
    links.push("https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-01.jpg");
    links.push("https://github.com/Steve-siddu/Portfolio/blob/main/Images/leaves.jpg");
    var k=document.getElementById("particles-js");
    var x=0;
    
    setInterval(()=>{
        if(x<links.length)
        {
            x=x+1;
        }
        else
        {
            x=1;
        }
        k.style.backgroundImage="url("+`${links[x-1]}`+")";
    },10000);
}
const fixing_navbar = () =>{
    subject_hover();
    change_background();
}

fixing_navbar();
