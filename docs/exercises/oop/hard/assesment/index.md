# Assessment

Adottak hallgatók

    Student
    ----------------
    name:    string
    scores: []number
    ----------------

A scores a hallgató eredményeit tartalmazó tömb. Az eredmények
százalékban értendőek, azaz 0 és 100 közötti értékek.

Legyen egy Assessment osztály

    Assessment
    -----------------------
    passed(
        students: []Student
    ): []Student
    -----------------------

A passed művelet hallgatók egy tömbjét kapja és kiválogatja
közülük azokat, akik eredménye átlagosan eléri a 60 százalékot.


