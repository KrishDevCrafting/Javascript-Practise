Purchase{
  shoes: 20, 
  GST: 1.2,
    TotalPay: function (){
    var output = Purchase.shoes * Purchase.GST;
    console.log("Total_Price...!",output)
    }
}

Purchase.TotalPay();
