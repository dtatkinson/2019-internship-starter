function format(table) {
	
  const tableText = table.map(function(row) {
    return row.join(" ");
  });
	 var y = tableText.concat(y);
 for (var i =0;i<4;i++)
	{
	 var x = tableText[i].split(" ");
	 
	 
	 for(var count =0;count<x.length;count++)
	 {
		 if (x[count]>9 && x[count]<100)
		 {
			 for(var loop=0;loop<tableText.length;loop++)
			 {
				var padded = tableText[loop].split(" ");
					for(var counter =0;counter<padded.length;counter++)
					{
						if (padded[counter]<10 && padded[counter].indexOf(" ") ==-1)
							{
								padded[counter] = " " + padded[counter];
							}
							
					}
				tableText[loop] = padded.join(" ");
			 }
			 loop=0;
		 }
		 else if (x[count]>99)
		 { 
			for(var loops=0;loops<4;loops++)
			{
				var dpadded = y[loops].split(" ");
					for(var counterd =0;counterd<dpadded.length;counterd++)
					{
						if(dpadded[counterd]<10 && dpadded[counterd].indexOf("  ") ==-1)
						{
							dpadded[counterd] = "  " + dpadded[counterd];
						}
						else if(dpadded[counterd]>9 && dpadded[counterd]<100 && dpadded[counterd].indexOf(" ") ==-1)
						{
							dpadded[counterd] = " " + dpadded[counterd];
						}
						
					}
				tableText[loops] = dpadded.join(" ");

			}
			loops=0;	
		 }
			
	 }
	}

  return "\n" + tableText.join("\n") + "\n";
}

module.exports = { format };
