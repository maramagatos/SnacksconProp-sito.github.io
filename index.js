<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snacks con Propósito</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #fdf2f4;
            color: #333333;
        }
        nav {
            background-color: rgba(255, 255, 255, 0.90);
            padding: 15px;
            text-align: center;
            border-bottom: 2px solid #e0e0e0;
        }
        nav a {
            color: #2d6a4f;
            text-decoration: none;
            font-weight: bold;
            margin: 0 15px;
            font-size: 14px;
        }
        nav a:hover {
            color: #d63384;
        }
        header {
            position: relative;
            text-align: center;
            color: white;
        }
        .banner-img {
            width: 100%;
            height: 400px;
            object-fit: cover;
        }
        .texto-banner {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.45);
            padding: 20px;
            border-radius: 10px;
            width: 80%;
            max-width: 600px;
        }
        .texto-banner h1 {
            margin: 0 0 10px 0;
            font-size: 28px;
        }
        .texto-banner p {
            font-size: 16px;
            line-height: 1.4;
        }
        section {
            padding: 40px 20px;
            max-width: 900px;
            margin: auto;
        }
        h2 {
            color: #d63384;
            text-align: center;
            font-size: 24px;
            margin-bottom: 20px;
        }
        .caja-contenido {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 15px;
            border-left: 5px solid #d63384;
        }
        .caja-contenido h3 {
            margin-top: 0;
            color: #2d6a4f;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            background-color: #ffffff;
            margin-top: 20px;
        }
        table, th, td {
            border: 1px solid #dddddd;
        }
        th, td {
            padding: 12px;
            text-align: center;
        }
        th {
            background-color: #2d6a4f;
            color: white;
        }
        td img {
            width: 120px;
            height: 90px;
            object-fit: cover;
            border-radius: 5px;
        }
        /* Estilos sencillos para el Formulario exigido en la guía */
        .formulario-contacto {
            background-color: #ffffff;
            padding: 25px;
            border-radius: 8px;
            border-left: 5px solid #2d6a4f;
            margin-top: 20px;
        }
        .formulario-contacto label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #2d6a4f;
        }
        .formulario-contacto input,
        .formulario-contacto textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }
        .formulario-contacto button {
            background-color: #2d6a4f;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            font-size: 15px;
            display: block;
            width: 100%;
        }
        .formulario-contacto button:hover {
            background-color: #24553e;
        }
        footer {
            background-color: #ffffff;
            text-align: center;
            padding: 20px;
            margin-top: 30px;
            border-top: 1px solid #e0e0e0;
        }
        footer p {
            margin: 5px 0;
            font-size: 14px;
            color: #666666;
        }
    </style>
</head>
<body>
    <nav>
        <a href="#inicio">INICIO</a>
        <a href="#nosotros">NOSOTROS</a>
        <a href="#productos">PRODUCTOS</a>
        <a href="#formulario">CONTÁCTENOS</a>
    </nav>

    <header id="inicio">
        <img src="https://thefoodtech.com/wp-content/uploads/2024/11/granola-bars-bowl-with-blueberry-pink-background.jpg" alt="Banner de snacks saludables" class="banner-img">
        <div class="texto-banner">
            <h1>Snacks con Propósito</h1>
            <p>
                Somos un emprendimiento social en Engativá que busca apoyar el bienestar de los estudiantes. Transformamos las ventas de snacks saludables en apoyo para útiles y uniformes de estudiantes de bajos recursos.
            </p>
        </div>
    </header>

    <section id="nosotros">
        <h2>Nosotros</h2>
        <div class="caja-contenido">
            <h3>Objetivos del Proyecto</h3>
            <p>Promover la alimentación saludable dentro de la comunidad escolar y destinar las ganancias generadas a la compra de kits de útiles escolares y uniformes para compañeros que lo necesiten.</p>
        </div>
        <div class="caja-contenido">
            <h3>Misión</h3>
            <p>Ofrecer snacks saludables que alimenten el cuerpo y generen un impacto social directo en nuestro colegio, partiendo de la idea de que el estudio no debe hacerse con hambre.</p>
        </div>
        <div class="caja-contenido">
            <h3>Visión</h3>
            <p>Para el año 2031, lograr consolidarnos como un emprendimiento solidario reconocido en las instituciones educativas de Bogotá por la calidad de los productos y la ayuda prestada.</p>
        </div>
    </section>

    <section id="productos">
        <h2>Nuestros Productos</h2>
        <p style="text-align: center;">Menú de snacks saludables y nutritivos disponibles para la comunidad educativa:</p>
        <table>
            <tr>
                <th>Imagen</th>
                <th>Producto</th>
                <th>Descripción</th>
                <th>Precio</th>
            </tr>
            <tr>
                <td><img src="https://saludmediterranea.com/cdn/shop/articles/berries-bananas-smoothie-bowl_925x_d4a56152-834a-4d01-b599-06f622f5c3b2_600x600_crop_center.jpg?v=1551889360" alt="Fresh Strawberry Bowl"></td>
                <td>Fresh Strawberry Bowl</td>
                <td>Fresas seleccionadas con yogurt natural y granola.</td>
                <td>$ 7.500</td>
            </tr>
            <tr>
                <td><img src="https://img.freepik.com/fotos-premium/mezcla-frutos-secos-tazon-madera-alfombra-lino_1147-789.jpg?w=360" alt="Mix Vitalidad"></td>
                <td>Mix Vitalidad</td>
                <td>Mezcla de frutos secos y arándanos.</td>
                <td>$ 5.500</td>
            </tr>
            <tr>
                <td><img src="https://phantom-elmundo.unidadeditorial.es/bb413a9eb032b02856747d61c73fafa4/resize/414/f/jpg/assets/multimedia/imagenes/2019/07/03/15621550645577.jpg" alt="Barras Educativas"></td>
                <td>Barras Educativas</td>
                <td>Barritas horneadas de avena y miel.</td>
                <td>$ 4.200</td>
            </tr>
            <tr>
                <td><img src="https://thefoodtech.com/wp-content/uploads/2024/09/granola-bars-bowl-with-blueberry-pink-background.webp" alt="Yogurt con Cereal"></td>
                <td>Yogurt con Cereal</td>
                <td>Vaso de yogurt natural acompañado de cereal de avena.</td>
                <td>$ 4.000</td>
            </tr>
        </table>
    </section>

    <section id="contacto">
        <h2>Contáctenos</h2>
        <div class="caja-contenido">
            <p><strong>Ubicación:</strong> Engativá, Bogotá</p>
            <p><strong>Teléfono de contacto:</strong> 3197041328</p>
            <p><strong>Correo electrónico:</strong> snacksconproposito@gmail.com</p>
        </div>
        
<div class="formulario-contacto" id="formulario">
            <form action="mailto:snacksconproposito@gmail.com" method="post" enctype="text/plain">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required>

                <label for="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" required>

                <label for="asunto">Asunto:</label>
                <input type="text" id="asunto" name="asunto" required>

                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

                <button type="submit">Enviar datos</button>
            </form>
        </div>
    </section>

    <footer>
        <p><strong>Snacks con Propósito</strong></p>
        <p>Realizado por: Mariangel Rodriguez Clavijo</p>
        <p>Colegio Virtual Siglo XXI - 2026</p>
    </footer>
</body>
</html>