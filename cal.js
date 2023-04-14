
function clearScreen(val)    
{    
document.getElementById("inp").value=val;    
}    
function display(val)    
{document.getElementById("inp").value+=val;    
}    
function calculate()    
{    
try    
    {    
     clearScreen(eval(document.getElementById("inp").value))    
    }    
    catch(calculate)    
    {    
     clearScreen('Error') }    
} 