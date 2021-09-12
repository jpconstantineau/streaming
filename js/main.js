
        function ShowToDo(arr) {
            var out = "";
            var i;
            for(i = 0; i<arr.length; i++) {
              if(arr[i].status === "checked")
              {out += ' <label class="container"> <input type="checkbox" checked="' + arr[i].status + '">' + arr[i].display + '</label>';}
              else
              {
                out += ' <label class="container"> <input type="checkbox">' + arr[i].display + '</label>';
              }
                
            }
            document.getElementById("ToDoList").innerHTML = out;
        }