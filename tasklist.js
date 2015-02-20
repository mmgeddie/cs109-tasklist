$(document).ready(function() {
	$(".priority-option").click(function(){
		$(".priority-label").text($(this).text());
	});
	$(".add-button").click(function(){
		var taskName = $(".new-task-name").val();
		var priorityText = $(".priority-label").text();
		var priorityClass = "";
		if (taskName && priorityText!="Priority") {
			if (priorityText==='High') {
				priorityClass = "list-group-item-danger priority-high";
			} else if (priorityText==='Medium') {
				priorityClass = "list-group-item-warning priority-medium";
			} else {
				priorityClass = "priority-low";
			}
			var liNode = '<li class="list-group-item '+priorityClass+'"><a class="badge remove-item"><span class="glyphicon glyphicon-remove"></span></a>'+taskName+'</li>';
			$(".alert").css({ "display": "none" })
			$(".new-task-name").val("");
			$(".priority-label").text("Priority");
			if (priorityText==='High') {
				$(".list-group").prepend(liNode);
			} else if (priorityText==='Medium') {
				if ($(".list-group li.priority-high").size() > 0) {
					$(".list-group li.priority-high").last().after(liNode);
				} else {
					$(".list-group").prepend(liNode);
				}
			} else {
				$(".list-group").append(liNode);
			}
			$(".remove-item").click(function(){
				$(this).parent("li").remove()
			});
		} else {
		    $(".alert").css({ "display": "block" })
		}
	});

});