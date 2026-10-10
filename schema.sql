CREATE DATABASE stockroom;

use stockroom;

CREATE TABLE products (
    id int primary key auto_increment,
    name varchar(50) not null,
    sku varchar(50) not null,
    quantity int default(0),
    price decimal(6, 2),
    product_status varchar(50) default("inside")
);


-- data for test 
INSERT INTO products (name,sku,quantity,price,product_status) VALUES
("Wireless Mouse", "WM-000", 45, 18.99, "outside"),
("Mechanical Keyboard", "KB-101", 30, 59.99, "inside"),
("Gaming Headset", "HS-202", 25, 45.50, "inside"),
("USB-C Hub", "HB-303", 60, 24.99, "inside"),
("27-inch Monitor", "MN-404", 12, 189.99, "inside"),
("1TB External SSD", "SD-505", 40, 89.99, "inside"),
("HD Webcam", "WC-606", 50, 39.95, "inside"),
("Bluetooth Speaker", "SP-707", 35, 29.99, "outside"),
("Ergonomic Desk Chair", "CH-808", 8, 149.00, "inside"),
("LED Desk Lamp", "LP-909", 22, 19.99, "inside"),
("Wireless Charger Pad", "CP-111", 75, 14.99, "inside"),
("Laptop Backpack", "BP-222", 18, 34.99, "inside"),
("HDMI Cable 6ft", "CB-333", 120, 7.99, "inside"),
("Graphic Drawing Tablet", "TB-444", 15, 79.99, "inside"),
("Dual-Band Wi-Fi Router", "RT-555", 28, 64.50, "inside"),
("Noise-Cancelling Earbuds", "EB-666", 55, 49.99, "inside"),
("MicroSD Card 128GB", "MS-777", 90, 15.99, "inside"),
("Vertical Ergonomic Mouse", "VM-888", 20, 27.50, "inside"),
("RGB Mouse Pad", "MP-999", 42, 12.99, "outside"),
("Smart Fitness Watch", "SW-112", 33, 119.99, "inside"),
("Portable Power Bank", "PB-223", 65, 22.99, "inside"),
("Desktop Microphone", "MC-334", 17, 34.50, "inside"),
("Privacy Screen Filter", "SF-445", 24, 21.99, "inside"),
("Bluetooth USB Adapter", "BA-556", 110, 9.99, "inside"),
("4K Laser Projector", "PR-667", 5, 899.00, "inside"),
("Quiet Cooling Pad", "CL-778", 38, 18.50, "inside"),
("Uninterruptible Power Supply", "UP-889", 10, 125.00, "inside"),
("Fingerprint Scanner USB", "FS-990", 14, 42.00, "inside"),
("Thermal Paste Compound", "TP-113", 150, 6.99, "inside"),
("Braided Lightning Cable", "LC-224", 85, 11.99, "inside"),