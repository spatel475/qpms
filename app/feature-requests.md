- Reservations page:
	- Default: Occupied rooms only, with ability to filter (multi-select) other stay status
	- Add optional date range filter
	- Order by end date desc
	- Warn when guest checkout is past due (red), today (orange), tomorrow (yellow)

	- Res detail view:
		- Indicate if amount is due
		- User is clickable that shows all stays for users in popup/new page

- System for extending weekly reservations
	- Extend weekly stays without checkout. And track each week extension. Week 1. Week2. etc 
	- When copy reservation is used, an option to maintain link from previous (one from which new stay was copied) will be given
		- Form a link between related stays (Stays that were extended, Same guest reserving multiple rooms, etc)
		- on UI, user will have a checkbox to mark if the new stay should "Maintain link to related stay"
	- Have a view to show related stays using the link system

- Room Inventory:
	- On create res, (un)available rooms should take into account the selected date range for the stay
	- Wait till dates are selected before getting reserved/occupied rooms for that date range

