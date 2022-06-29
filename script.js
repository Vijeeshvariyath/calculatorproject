// 1. display numbers in textbox

function displayNum(num)
{
    result.value += num
}

// 2. clear the values of textbox

function clearBox()
{
     result.value=""

}

// 3. evaluate the expressions


function evaluation()
{
    expr=result.value
    output=eval(expr)
    result.value=output

    // result.value=eval(result.value)
}



// 4.  function remove item from the textbox



function removeValue()
{
    cuExp=result.value
    result.value=cuExp.slice(0,-1)
}