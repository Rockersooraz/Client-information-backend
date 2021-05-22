import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.setGlobalPrefix('api/v1')
	app.useGlobalPipes(new ValidationPipe())
	const config = new DocumentBuilder()
		.setTitle('Client Information Task')
		.setDescription('Client specific Rest Api')
		.setVersion('1.0.0')
		.setContact('Suraj', '', 'suraj.adhikari80@gmail.com')
		.addTag('clients')
		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('api', app, document)

	app.enableCors()
	const PORT = process.env.PORT || 3000
	await app.listen(PORT, () => {
		console.log(`Our app is running on port ${PORT}`)
	})
}
bootstrap()
