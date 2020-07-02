-- Up
CREATE TABLE Product (
  sku INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  details TEXT,
  imageUrl TEXT,
  currency TEXT,
  price INTEGER,
  salePrice INTEGER
);

INSERT INTO Product
  (name, details, imageUrl, currency, price, salePrice)
values('Pianta 1', 'Donec pharetra tristique semper. Donec eu libero ac nibh eleifend iaculis sed et nulla. Integer vel faucibus risus. Quisque nec pretium eros. Mauris tincidunt libero et egestas vehicula. Mauris bibendum ante ut urna fermentum porta. Nam luctus vel mauris eu euismod. Aliquam ut posuere nisl, ac vulputate ex. Suspendisse fringilla maximus enim non elementum. Morbi vitae sapien mattis, facilisis turpis in, lacinia leo. Vivamus placerat commodo urna, eu eleifend nisi mollis et. Nullam pretium diam sed tincidunt ornare. Morbi non congue elit. Nullam sit amet quam iaculis, ultricies lorem eget, egestas justo. Donec sollicitudin elit non egestas porta.', '/plant1.jpg', 'EUR', 3900, null);
INSERT INTO Product
  (name, details, imageUrl, currency, price, salePrice)
values('Pianta 2', 'Donec porttitor imperdiet ultricies. Mauris dictum eros in luctus iaculis. In aliquam convallis elit sed auctor. Suspendisse bibendum, lectus nec ullamcorper volutpat, sem dolor vestibulum felis, nec euismod massa libero quis nibh. Vestibulum metus neque, vehicula eu lectus eget, elementum aliquam nisl. Cras pretium nunc eget lacus venenatis scelerisque sed in orci. Ut et pretium libero.', '/plant1.jpg', 'EUR', 2199, null);
INSERT INTO Product
  (name, details, imageUrl, currency, price, salePrice)
values('Pianta 3', 'Duis mi ex, commodo ac arcu eu, pulvinar sodales odio. Vestibulum ut magna ac urna bibendum bibendum eget ut nisi. Mauris commodo quam a orci eleifend, porttitor semper sem consectetur. Integer laoreet nunc nec volutpat venenatis. Donec quis quam sodales, mollis tortor sit amet, rutrum dui. Ut ultrices rutrum velit ut viverra. Quisque et ligula metus. Cras blandit pulvinar massa nec tempus. In non dignissim orci.', '/plant1.jpg', 'EUR', 1599, null);
INSERT INTO Product
  (name, details, imageUrl, currency, price, salePrice)
values('Pianta 4', 'Morbi commodo enim eget dolor consectetur imperdiet. Nunc feugiat eget est id aliquam. Suspendisse quam augue, pulvinar in velit ac, finibus bibendum odio. Curabitur a nisi in ex scelerisque tempus. Ut quis elit nec tellus posuere fermentum. Phasellus imperdiet maximus faucibus. Integer ultrices erat at mauris facilisis vehicula.', '/plant1.jpg', 'EUR', 4799, 3000);
INSERT INTO Product
  (name, details, imageUrl, currency, price, salePrice)
values('Pianta 5', 'In tempor rhoncus ligula, a molestie nulla venenatis eu. Donec blandit facilisis velit non tempor. In non finibus nibh. Ut nulla risus, aliquet at orci sed, dignissim gravida orci. Donec malesuada tincidunt tempor. In sit amet finibus turpis. Praesent enim libero, sagittis ut vehicula id, pretium a dui. Sed eu tincidunt nibh. Sed suscipit pretium erat, sit amet malesuada felis semper in. Proin rhoncus neque non felis aliquam, nec lobortis enim ullamcorper. Quisque ultrices rutrum tellus, et accumsan ligula blandit varius.', '/plant1.jpg', 'EUR', 2699, null);
INSERT INTO Product
  (name, details, imageUrl, currency, price, salePrice)
values('Pianta 6', 'Praesent a mi elementum mauris blandit mattis vel eu justo. Mauris egestas sodales lacus. In nec nisl quis quam laoreet pellentesque. Suspendisse semper ante sed massa suscipit vehicula. Nulla a mauris suscipit, vulputate mi ac, ultricies elit. Aliquam at auctor lorem. Curabitur nec orci lectus.', '/plant1.jpg', 'EUR', 499, null);
INSERT INTO Product
  (name, details, imageUrl, currency, price, salePrice)
values('Pianta 7', 'Pellentesque aliquam ipsum in maximus sagittis. Integer at imperdiet urna. Ut neque est, elementum quis mollis ut, aliquet eu erat. Mauris hendrerit consectetur dui nec dignissim. Vivamus in elementum nisl. Curabitur vitae lacus eget velit semper tempor ut a mauris. Mauris maximus justo non mauris dapibus maximus. Nullam a posuere turpis. Morbi sit amet magna leo.', '/plant1.jpg', 'EUR', 4199, null);
INSERT INTO Product
  (name, details, imageUrl, currency, price, salePrice)
values('Pianta 8', 'Nulla ut sem nisi. Proin quis nisl turpis. Suspendisse suscipit risus sed urna rutrum pretium. Fusce non scelerisque justo, id porttitor dolor. Suspendisse iaculis rhoncus nulla, et vestibulum sem. Donec mollis ex at leo tempus, eleifend feugiat dolor molestie. Nullam vulputate commodo felis, eget tempor lectus dapibus ac. Ut consequat pharetra mattis. In egestas massa at enim fermentum, sit amet ullamcorper diam condimentum. Sed sollicitudin, lectus maximus consequat mattis, purus massa lacinia nunc, et bibendum purus justo vel erat.', '/plant1.jpg', 'EUR', 3349, 2199);

-- Down
DROP TABLE Product;