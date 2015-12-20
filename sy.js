//作者:沈雅
//时间:2015-12-20
//版权:GPLv2
//用于实验室数据传感器读取index.html

function freshening()
{
    var tmp_all=""
    var URL = "./sy.cgi";
    var xmlhttp_object = createXHR();
    xmlhttp_object.open("POST",URL,false);//false:synchronous;true:asynchronous
    xmlhttp_object.setRequestHeader("If-Modified-Since", "0");
    xmlhttp_object.send(1);//懒得写代码简单的一个１代替
    if(4 == xmlhttp_object.readyState)
    {
        if (200 == xmlhttp_object.status)
        {
            tmp_all = xmlhttp_object.responseText //将服务器获取到的信息写入tmp_all
            arr=tmp_all.split("#");
            document.getElementById("tmp1").innerHTML=arr[1];
            document.getElementById("tmp2").innerHTML=arr[2];
            document.getElementById("tmp3").innerHTML=arr[3];
            document.getElementById("tmp4").innerHTML=arr[4];
            document.getElementById("tmp5").innerHTML=arr[5];
            alert(tmp_all);

        }
        else
        {
            alert("请求未成功！");
        }
    }
    else
    {
        alert("连接未完成！");
    }

}



function createXHR()
{
    //alert('in createXHR');
    var xmlhttp = null;

    if(window.XMLHttpRequest)
        xmlhttp = new XMLHttpRequest();
    else if(window.ActiveXObject)
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    else
        xmlhttp = new ActiveXObject('Msxml2.XMLHTTP');

    if(xmlhttp)
    {
        ;//alert('create xmlhttp success!');
    }
    else
        alert('create xmlhttp error!');
    return xmlhttp;
}
