## PROCESS & PSEUDO CODE

ACCEPTANCE CRITERIA FOR HOMEWORK

1. Current Day Display
    positioned at top of scheduler

2. Time Blocks
    time blocks displayed in order going down standard business hours 9 to 5

    *   Each time block i view is color coded:
            PAST
            PRESENT
            FUTURE
    
    *   On click, a timeblock will allow me to enter AN event
            * Time blocks allow a user to type directly in the a block it is        
              attached to

            * Upon save the text entered from that event is saved in local storage

            * That information is peristent in local storage and on the page


Visual

                            DAY MONTH YEAR
============================================================================
[    [9am]  [ [ potential entry area                         ][ save icon] ] ]
[    [11am][ potential entry area                            ][ save icon]  ]
[    [12pm][ potential entry area                            ][ save icon]  ]
[    [1pm][ potential entry area                             ][ save icon]  ]
[    [2pm][ potential entry area                             ][ save icon]  ]

1. Generate a div for each work day with containers

    For Loop * 9 count 
        create div         
        attr.class="time-block"
         
            create div
            attr.class="time-teller"
            text.(i)

            create form
            attr.class="input"
            text.("enter information")

            create form
            attr.class="submit"
            attr.class("src", "save-icon.com)
 
        append time-block
        append time-teller
        append input
        append submit

2. SAVING & STORING

    Upon entering text into the corresponding hour field a user can save that text using the save button to that field.

    This requires local storage, so stringify the data in that field upon save & push into an array of objects 

