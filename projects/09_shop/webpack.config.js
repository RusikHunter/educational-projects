const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/scripts/index.js', // Входной файл
    output: {
        filename: 'bundle.js', // Выходной файл
        path: path.resolve(__dirname, 'dist'), // Папка для выходного файла
        clean: true, // Очищает папку dist перед каждой сборкой
    },
    devtool: 'inline-source-map', // Используйте для отладки
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'), // Папка с вашими статическими файлами
        }, // Отдавать файлы из папки dist
        port: 8080
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Шаблон HTML
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/, // Для файлов CSS
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/, // Для изображений
                type: 'asset/resource',
            },
            {
                test: /\.js$/, // Для JavaScript
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Необходимо установить babel-loader и @babel/core, если вы используете Babel
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    mode: 'development', // Режим разработки
};