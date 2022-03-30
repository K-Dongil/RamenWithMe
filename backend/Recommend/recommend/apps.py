from django.apps import AppConfig

class RecommendConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'recommend'
    
    def ready(self):
        from . import trainer
        trainer.start()
            
    
