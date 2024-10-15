CREATE TABLE users (
    id int NOT NULL,
    emri varchar(255) NOT NULL,
    username varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    confirm_password varchar(255) NOT NULL,
    is_admin varchar(255) NOT NULL
);

INSERT INTO users (id, emri, username, email, password, confirm_password, is_admin) 
VALUES 
(1, 'Ariana', 'arianaaa', 'ariana.rexhepi@digitalschool.tech', 'ariana123', 'true', 'false'),
(2, 'Test', 'test', 'test.rexhepi@digitalschool.tech', 'tst123', 'true', 'false');

ALTER TABLE users ADD PRIMARY KEY (id);
ALTER TABLE users MODIFY id int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

CREATE TABLE movies (
    id int NOT NULL,
    movie_name varchar(255) NOT NULL,
    movie_desc varchar(255) NOT NULL,
    movie_quality varchar(255) NOT NULL,
    movie_rating int NOT NULL,
    movie_image varchar(255) NOT NULL
);

INSERT INTO movies (id, movie_name, movie_desc, movie_quality, movie_rating, movie_image) 
VALUES 
(1, 'Zgjoi', 'Hoping to provide for their families, struggling widows start a business to sell a local food product. Together, they find healing and solace in the new venture, but their will to live independently is soon met with hostility.', '3D', 10, 'zgjoi.jpg'),
(2, 'Fast and Furious', 'Fast & Furious is a media franchise centered on a series of action films that are largely concerned with illegal street racing, heists, spies and family. The franchise also includes short films, a television series, live shows, video games and theme park.', '2D', 7, 'fastandfurious.jpg'),
(3, 'VENOM', 'Journalist Eddie Brock is trying to take down Carlton Drake, the notorious and brilliant founder of the Life Foundation. While investigating one of Drake\'s experiments, Eddie\'s body merges with the alien Venom -- leaving him with superhuman strength and powers.', '6D', 7, 'venom.png');

ALTER TABLE movies ADD PRIMARY KEY (id);
ALTER TABLE movies MODIFY id int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

CREATE TABLE bookings (
    id int NOT NULL,
    user_id int NOT NULL,
    movie_id int NOT NULL,
    nr_tickets int NOT NULL,
    date varchar(255) NOT NULL,
    time varchar(255) NOT NULL
);

INSERT INTO bookings (id, user_id, movie_id, nr_tickets, date, time) 
VALUES 
(3, 2, 1, 2, '2022-12-16', '19:00');

ALTER TABLE bookings ADD PRIMARY KEY (id);
ALTER TABLE bookings MODIFY id int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
