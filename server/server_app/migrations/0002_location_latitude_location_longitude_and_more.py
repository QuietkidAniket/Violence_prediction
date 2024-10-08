# Generated by Django 5.1.1 on 2024-09-07 19:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='location',
            name='latitude',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='location',
            name='longitude',
            field=models.FloatField(default=0.0),
        ),
        migrations.AlterField(
            model_name='incident',
            name='n_men',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='incident',
            name='n_women',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='incident',
            name='sex_ratio',
            field=models.FloatField(default=0.0),
        ),
        migrations.AlterField(
            model_name='location',
            name='description',
            field=models.CharField(blank=True, max_length=1000),
        ),
    ]
