const leapYear = function (year) 
{
    if(typeof (year)=== 'number')
    {
        if(year>0)
{
   if ( year % 4 === 0 )
   {
      if(year % 100 === 0 )
      {
          if(year % 400 === 0 )
          {
             return' true';
          }
       
       else{return'false';}
  }
  
  else{return'true';}
    }

   else {return'false';}
}
else{return'the unmber before the 0';}
    }
    else{return'not a number';}
};
//-----------------------------------------
const leapYear = function (year) 
{
if ( (year % 100 === 0 &&year % 400 === 0 && year % 4 === 0) )

    {return'true';} 

else {return'false';}
}
/*
leapYear(1996);
"true"
leapYear(1997);
"false"
leapYear(1900);
"false"
leapYear(2000);
" true"
leapYear(-345)
"the unmber before the 0"
leapYear('tex')
"not a number"
*/

//typeof (number1)=== 'number

