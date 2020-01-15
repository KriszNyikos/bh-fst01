

CREATE TABLE awards (year_film VARCHAR(4),year_award VARCHAR(4), ceremony VARCHAR(80), category VARCHAR(80), nominee VARCHAR(30), film VARCHAR(30), win VARCHAR(10));


-- 1. Azoknak a színészeknek a nevei, akiket az 5. díjátadón jelöltek.
SELECT nominee FROM awards WHERE ceremony = 5;

-- 2. Azoknak a színészeknek a nevei, akik az 5. díjátadón díjat is kaptak.
SELECT nominee FROM awards WHERE ceremony = 5 AND win = 'True';

-- 3. Az 1950-es években jelölt színészek nevei. Egy név csak egyszer szerepeljel az eredményben.
SELECT DISTINCT nominee, year_award FROM awards WHERE year_award >= 1950 AND year_award < 1960;

-- 4. Azoknak az éveknek a listája, amikor Meryl Streep úgy nyert díjat, hogy a megelőző évben is jelölték, de akkor nem nyert.
SELECT DISTINCT l.year_award, l.win, l.nominee, r.year_award, r.win, l.nominee FROM awards l 
INNER JOIN awards r ON r.year_award = l.year_award-1 
AND l.nominee = 'Meryl Streep' 
AND r.nominee ='Meryl Streep' 
AND r.win = 'False' 
AND l.win = 'True';